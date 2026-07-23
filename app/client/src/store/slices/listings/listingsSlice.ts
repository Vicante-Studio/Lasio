import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Listing } from '@/types/Listing'

interface ListingsState {
  items: Listing[]
}

const initialState: ListingsState = {
  items: []
}

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings: (state, action: PayloadAction<Listing[]>) => {
      state.items = action.payload
    }
  }
})

export const { setListings } = listingsSlice.actions
export const selectFilteredListings = (state: { listings: ListingsState }) => state.listings.items
export default listingsSlice.reducer
