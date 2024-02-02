const Reviews = () => {
    const reviews = [
        {
            id: 1,
            author: "John Doe",
            date: "January 15, 2024",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        },
        {
            id: 2,
            author: "Jane Smith",
            date: "February 2, 2024",
            content:
                "Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis.",
        },
        // Add more reviews as needed
    ];
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8">
                    Customer Reviews
                </h2>
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white p-6 mb-6 rounded shadow-md"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-600">
                                {review.author}
                            </span>
                            <span className="text-sm text-gray-500">
                                {review.date}
                            </span>
                        </div>
                        <p className="text-gray-800">{review.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
