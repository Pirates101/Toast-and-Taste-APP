export interface WineRecommendation {
    id: number
    title: string
    averageRating: number
    description: string
    imageUrl: string
    link: string
    price: string
    ratingCount: number
    score: number
}

export interface WineRecommendationResponse {
    recommendedWines: WineRecommendation[]
    totalFound: number

}
