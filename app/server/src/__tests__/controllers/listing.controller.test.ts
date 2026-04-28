/// <reference types="jest" />

jest.mock('../../services/listing.service', () => ({
  getAllListings: jest.fn(),
  getOneListing: jest.fn(),
  createListing: jest.fn(),
  updateListing: jest.fn(),
  deleteListing: jest.fn()
}));

import {
  handleGetAllListings,
  handleGetOneListing,
  handleCreateListing,
  handleUpdateListing,
  handleDeleteListing
} from '../../controllers/listing.controller';

import {
  getAllListings,
  getOneListing,
  createListing,
  updateListing,
  deleteListing
} from '../../services/listing.service';

const mockReq = (data = {}) => data as any;

const mockRes = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Listing Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // =========================
  // GET ALL
  // =========================
  describe('handleGetAllListings', () => {
    it('should return all listings', async () => {
      const req = mockReq({
        query: { city: 'lagos' }
      });

      const res = mockRes();

      (getAllListings as jest.Mock).mockResolvedValue([
        { id: '1' }
      ]);

      await handleGetAllListings(req, res);

      expect(getAllListings).toHaveBeenCalledWith({
        city: 'lagos'
      });

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith([{ id: '1' }]);
    });

    it('should handle errors', async () => {
      const req = mockReq({ query: {} });
      const res = mockRes();

      (getAllListings as jest.Mock).mockRejectedValue(
        new Error('DB error')
      );

      await handleGetAllListings(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to fetch listings'
      });
    });
  });

  // =========================
  // GET ONE
  // =========================
  describe('handleGetOneListing', () => {
    it('should return one listing', async () => {
      const req = mockReq({ params: { id: '123' } });
      const res = mockRes();

      (getOneListing as jest.Mock).mockResolvedValue({
        id: '123'
      });

      await handleGetOneListing(req, res);

      expect(getOneListing).toHaveBeenCalledWith('123');

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        id: '123'
      });
    });

    it('should handle errors', async () => {
      const req = mockReq({ params: { id: '123' } });
      const res = mockRes();

      (getOneListing as jest.Mock).mockRejectedValue(
        new Error('Not found')
      );

      await handleGetOneListing(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to fetch listing'
      });
    });
  });

  // =========================
  // CREATE
  // =========================
  describe('handleCreateListing', () => {
    it('should create listing', async () => {
      const req = mockReq({
        body: { title: 'Test Listing' }
      });

      const res = mockRes();

      (createListing as jest.Mock).mockResolvedValue({
        id: '1',
        title: 'Test Listing'
      });

      await handleCreateListing(req, res);

      expect(createListing).toHaveBeenCalledWith({
        title: 'Test Listing'
      });

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        id: '1',
        title: 'Test Listing'
      });
    });

    it('should handle error', async () => {
      const req = mockReq({
        body: { title: 'Test' }
      });

      const res = mockRes();

      (createListing as jest.Mock).mockRejectedValue(
        new Error('Create failed')
      );

      await handleCreateListing(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Create failed'
      });
    });
  });

  // =========================
  // UPDATE
  // =========================
  describe('handleUpdateListing', () => {
    it('should update listing', async () => {
      const req = mockReq({
        params: { id: '1' },
        body: { title: 'Updated' }
      });

      const res = mockRes();

      (updateListing as jest.Mock).mockResolvedValue({
        id: '1',
        title: 'Updated'
      });

      await handleUpdateListing(req, res);

      expect(updateListing).toHaveBeenCalledWith(
        '1',
        { title: 'Updated' }
      );

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  // =========================
  // DELETE
  // =========================
  describe('handleDeleteListing', () => {
    it('should delete listing', async () => {
      const req = mockReq({ params: { id: '1' } });
      const res = mockRes();

      (deleteListing as jest.Mock).mockResolvedValue(true);

      await handleDeleteListing(req, res);

      expect(deleteListing).toHaveBeenCalledWith('1');

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Listing deleted successfully'
      });
    });

    it('should handle not found error', async () => {
      const req = mockReq({ params: { id: '1' } });
      const res = mockRes();

      (deleteListing as jest.Mock).mockRejectedValue(
        new Error('Listing not found')
      );

      await handleDeleteListing(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});