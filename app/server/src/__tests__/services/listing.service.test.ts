/// <reference types="jest" />

jest.mock('../../config/supabase', () => ({
  __esModule: true,
  default: {
    from: jest.fn()
  }
}));

jest.mock('../../utils/parsePriceFilter', () => ({
  __esModule: true,
  default: jest.fn((value) => Number(value))
}));

import supabase from '../../config/supabase';
import parsePrice from '../../utils/parsePriceFilter';
import {
  createListing,
  getAllListings,
  getOneListing,
  updateListing,
  deleteListing
} from '../../services/listing.service';

const mockSupabase = supabase as any;
const mockParsePrice = parsePrice as jest.Mock;

describe('Listing Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('createListing', () => {
    it('should create a listing', async () => {
      const createdListing = {
        id: 'abc',
        title: 'Modern Apartment'
      };

      mockSupabase.from.mockReturnValue({
        insert: jest.fn().mockReturnValue({
          select: jest.fn().mockReturnValue({
            single: jest.fn().mockResolvedValue({
              data: createdListing,
              error: null
            })
          })
        })
      });

      const result = await createListing({
        title: 'Modern Apartment'
      } as any);

      expect(result).toEqual(createdListing);
    });

    it('should throw if create fails', async () => {
      mockSupabase.from.mockReturnValue({
        insert: jest.fn().mockReturnValue({
          select: jest.fn().mockReturnValue({
            single: jest.fn().mockResolvedValue({
              data: null,
              error: { message: 'Create failed' }
            })
          })
        })
      });

      await expect(
        createListing({ title: 'Test' } as any)
      ).rejects.toThrow('Create failed');
    });
  });

  describe('getAllListings', () => {
    it('should fetch all listings with no filters', async () => {
      const listings = [{ id: '1' }, { id: '2' }];

      const queryBuilder = {
        ilike: jest.fn().mockReturnThis(),
        gte: jest.fn().mockReturnThis(),
        lte: jest.fn().mockReturnThis(),
        then: (resolve: any) =>
          resolve({
            data: listings,
            error: null
          })
      };

      mockSupabase.from.mockReturnValue({
        select: jest.fn().mockReturnValue(queryBuilder)
      });

      const result = await getAllListings();

      expect(result).toEqual(listings);
    });

    it('should apply filters correctly', async () => {
      const listings = [{ id: '1' }];

      const queryBuilder = {
        ilike: jest.fn().mockReturnThis(),
        gte: jest.fn().mockReturnThis(),
        lte: jest.fn().mockReturnThis(),
        then: (resolve: any) =>
          resolve({
            data: listings,
            error: null
          })
      };

      mockSupabase.from.mockReturnValue({
        select: jest.fn().mockReturnValue(queryBuilder)
      });

      await getAllListings({
        city: 'lagos',
        minPrice: '2000000',
        maxPrice: '5000000'
      } as any);

      expect(queryBuilder.ilike).toHaveBeenCalledWith(
        'city',
        '%lagos%'
      );

      expect(mockParsePrice).toHaveBeenCalledWith('2000000');
      expect(mockParsePrice).toHaveBeenCalledWith('5000000');

      expect(queryBuilder.gte).toHaveBeenCalledWith(
        'price',
        2000000
      );

      expect(queryBuilder.lte).toHaveBeenCalledWith(
        'price',
        5000000
      );
    });

    it('should throw if fetch fails', async () => {
      const queryBuilder = {
        ilike: jest.fn().mockReturnThis(),
        gte: jest.fn().mockReturnThis(),
        lte: jest.fn().mockReturnThis(),
        then: (resolve: any) =>
          resolve({
            data: null,
            error: new Error('Fetch failed')
          })
      };

      mockSupabase.from.mockReturnValue({
        select: jest.fn().mockReturnValue(queryBuilder)
      });

      await expect(getAllListings()).rejects.toThrow(
        'Fetch failed'
      );
    });
  });

  describe('getOneListing', () => {
    it('should fetch one listing', async () => {
      const listing = { id: 'abc' };

      mockSupabase.from.mockReturnValue({
        select: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            single: jest.fn().mockResolvedValue({
              data: listing,
              error: null
            })
          })
        })
      });

      const result = await getOneListing('abc');

      expect(result).toEqual(listing);
    });

    it('should throw if listing not found', async () => {
      mockSupabase.from.mockReturnValue({
        select: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            single: jest.fn().mockResolvedValue({
              data: null,
              error: { message: 'Not found' }
            })
          })
        })
      });

      await expect(getOneListing('abc')).rejects.toThrow(
        'Not found'
      );
    });
  });

  describe('updateListing', () => {
    it('should update listing', async () => {
      const updated = {
        id: 'abc',
        title: 'Updated'
      };

      mockSupabase.from.mockReturnValue({
        update: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            select: jest.fn().mockReturnValue({
              single: jest.fn().mockResolvedValue({
                data: updated,
                error: null
              })
            })
          })
        })
      });

      const result = await updateListing(
        'abc',
        { title: 'Updated' }
      );

      expect(result).toEqual(updated);
    });

    it('should throw if update fails', async () => {
      mockSupabase.from.mockReturnValue({
        update: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            select: jest.fn().mockReturnValue({
              single: jest.fn().mockResolvedValue({
                data: null,
                error: { message: 'Update failed' }
              })
            })
          })
        })
      });

      await expect(
        updateListing('abc', { title: 'Updated' })
      ).rejects.toThrow('Update failed');
    });
  });

  describe('deleteListing', () => {
    it('should delete listing successfully', async () => {
      mockSupabase.from.mockReturnValue({
        delete: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            select: jest.fn().mockResolvedValue({
              data: [{ id: 'abc' }],
              error: null
            })
          })
        })
      });

      const result = await deleteListing('abc');

      expect(result).toBe(true);
    });

    it('should throw if listing does not exist', async () => {
      mockSupabase.from.mockReturnValue({
        delete: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            select: jest.fn().mockResolvedValue({
              data: [],
              error: null
            })
          })
        })
      });

      await expect(deleteListing('abc')).rejects.toThrow(
        'Listing not found'
      );
    });

    it('should throw if delete fails', async () => {
      mockSupabase.from.mockReturnValue({
        delete: jest.fn().mockReturnValue({
          eq: jest.fn().mockReturnValue({
            select: jest.fn().mockResolvedValue({
              data: null,
              error: { message: 'Delete failed' }
            })
          })
        })
      });

      await expect(deleteListing('abc')).rejects.toThrow(
        'Delete failed'
      );
    });
  });
});