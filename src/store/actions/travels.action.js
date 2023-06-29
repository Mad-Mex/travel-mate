import { travelsTypes } from "../types"

const { CREATE_TRAVELS } = travelsTypes

export const createTravels = ({ travel }) => ({
    type: CREATE_TRAVELS,
    travel: travel
})