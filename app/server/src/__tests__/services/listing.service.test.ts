/// <reference types="jest" />

jest.mock('../../config/supabase', () => ({
  __esModule: true,
  default: {
    from: jest.fn()
  }
}))

import supabase from '../../config/supabase'
import { createListing, getAllListings, getOneListing, updateListing, deleteListing } from '../../services/listing.service'

const mockSupabase = supabase as any

describe('Listing Service', () => {

    //First test => Create Listing
    describe('createListing', () => {

        it('Should create a listing', async() => {
            const createdListing = {
                                        id: "abc",
                                        created_at: "2026-04-21 17:17:58.803666+00",
                                        title: "Modern Studio Apartment",
                                        description: "Compact studio with open plan design and city views.",
                                        location: "Victoria Island",
                                        city: "Lagos",
                                        state: "Ikeja",
                                        bedrooms: 4,
                                        bathrooms: 6,
                                        sizeSqft: 5000,
                                        price: 20000000,
                                        status: "For Sale",
                                        features: ["Balcony", "Air Conditioning", "Solar Panels", "Security System"],
                                        images: [
                                        "https://omxorqhurtpkrsonkexj.supabase.co/storage/v1/object/public/listing-images/b5db547e-81b2-471f-b6b9-9cdf6cbbb050-b0b49704-775d-4ae9-aeee-e53d6ac05feb-9d8bf0ae-54bc-4c04-a109-d7c9012cda4b.jpg"
                                        ],
                                        property_type: "Studio",
                                        agent_id: "234"
                                    }

            mockSupabase.from = jest.fn().mockReturnValue({
                insert: jest.fn().mockReturnValue({
                    select: jest.fn().mockReturnValue({
                        single: jest.fn().mockResolvedValue({
                                data: createdListing,
                                error: null
                            })
                    })
                })
            })

            const result = await createListing({
                                        title: "Modern Studio Apartment",
                                        description: "Compact studio with open plan design and city views.",
                                        location: "Victoria Island",
                                        city: "Lagos",
                                        state: "Ikeja",
                                        bedrooms: 4,
                                        bathrooms: 6,
                                        sizeSqft: 5000,
                                        price: 20000000,
                                        status: "For Sale",
                                        features: ["Balcony", "Air Conditioning", "Solar Panels", "Security System"],
                                        images: [
                                        "https://omxorqhurtpkrsonkexj.supabase.co/storage/v1/object/public/listing-images/b5db547e-81b2-471f-b6b9-9cdf6cbbb050-b0b49704-775d-4ae9-aeee-e53d6ac05feb-9d8bf0ae-54bc-4c04-a109-d7c9012cda4b.jpg"
                                        ],
                                        property_type: "Studio",
                                        agent_id: "234"
                                    })

                                    expect(result).toEqual(createdListing)

        })

        it('Should throw an error when supabase returns an error', async () => {

            mockSupabase.from = jest.fn().mockReturnValue({
                insert: jest.fn().mockReturnValue({
                    select: jest.fn().mockReturnValue({
                        single: jest.fn().mockResolvedValue({
                                data: null,
                                error: { message: 'Something went wrong' }
                            })
                    })
                })
            })

            await expect(createListing({
                                        title: "Modern Studio Apartment",
                                        description: "Compact studio with open plan design and city views.",
                                        location: "Victoria Island",
                                        city: "Lagos",
                                        state: "Ikeja",
                                        bedrooms: 4,
                                        bathrooms: 6,
                                        sizeSqft: 5000,
                                        price: 20000000,
                                        status: "For Sale",
                                        features: ["Balcony", "Air Conditioning", "Solar Panels", "Security System"],
                                        images: [
                                        "https://omxorqhurtpkrsonkexj.supabase.co/storage/v1/object/public/listing-images/b5db547e-81b2-471f-b6b9-9cdf6cbbb050-b0b49704-775d-4ae9-aeee-e53d6ac05feb-9d8bf0ae-54bc-4c04-a109-d7c9012cda4b.jpg"
                                        ],
                                        property_type: "Studio",
                                        agent_id: "234"
                                    })).rejects.toThrow('Something went wrong')

        })
    })
})