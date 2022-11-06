import "./index.css"

const NewCollection = () => (
    <div className="new-collection-container">
        <p className="heading">New this week</p>
        <div className="all-card-container">
            <div className="collection-container">
            <div className="card-container1">
                <div className="text-container">
                    <p className="card-name">Collection</p>
                    <p className="card-heading">Most popular <br/> around the world</p>
                </div>
                <div className="button-container">
                    <button className="card-button">Show all</button>
                </div>
            </div>
            </div>
            <div className="collection-container">
            <div className="card-container2">
                <div className="text-container">
                    <p className="card-name">Collection</p>
                    <p className="card-heading">Great for team <br/> building</p>
                </div>
                <div className="button-container">
                    <button className="card-button">Show all</button>
                </div>
            </div>
            </div>
            <div className="collection-container">
            <div className="card-container3">
                <div className="text-container">
                    <p className="card-name">Collection</p>
                    <p className="card-heading">Fun for the family</p>
                </div>
                <div className="button-container">
                    <button className="card-button">Show all</button>
                </div>
            </div>
            </div>
        </div>
    </div>
)
export default NewCollection