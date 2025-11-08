import { Bookmark } from 'lucide-react'
const Card = (props) => {

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s"alt="nachioooooo" />
                    <button>Save <Bookmark size={10} /> </button>
                </div>
                <div className="center">
                    <h3>Amazon <span>5 days ago</span></h3>
                    <h2>Senior UI/UX Designer</h2>
                    <div className='tag'>
                        <h4>part time </h4>
                        <h4>senior level</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card