function DetailsPage({ game, onBack }) {
    return (
      <div className="container mx-auto py-8">
        <button
          onClick={onBack}
          className="text-orange-600 font-bold mb-4 flex items-center"
        >
          ← Back
        </button>
        <div className="rounded overflow-hidden shadow-lg bg-white p-6">
          <h2 className="font-bold text-2xl mb-2">{game.title}</h2>
          <p className="text-gray-700 text-sm">{game.description}</p>
        </div>
      </div>
    );
  }
  
  export default DetailsPage;