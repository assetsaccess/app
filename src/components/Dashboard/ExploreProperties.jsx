const ExploreProperties = () => (
    <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md">
            <img src="property1.png" alt="Property 1" className="w-full" />
            <div>Beautiful House</div>
            <div>Token Price: $300,000</div>
            <button className="bg-darkblue text-white p-2 mt-2 rounded-md">Buy</button>
        </div>
        <div className="bg-white p-4 rounded-md">
            <img src="property2.png" alt="Property 2" className="w-full" />
            <div>Modern Villa</div>
            <div>Token Price: $500,000</div>
            <button className="bg-darkblue text-white p-2 mt-2 rounded-md">Buy</button>
        </div>
    </div>
);
export default ExploreProperties;  