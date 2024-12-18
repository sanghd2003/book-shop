// app/api/provinces/route.js

import { API_URLS } from '@/config/api'

export async function GET() {
    try {
        const response = await fetch(API_URLS.PROVINCES)
        const data = await response.json()

        return Response.json(data)
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }
}
