import trendingVid from '../assets/theConjuring2.mp4'
import bgImage from '/the-conjuring-2.jpg'

export default function Trending() {
    return (
        <div className="trending">
            <div className="trending-container">
                <div className="video-container">
                    <h2>The Conjuring 2</h2>
                    <p>Warner Bros. Pictures</p>
                    <img
                        src={bgImage}
                        alt="The Conjuring 2 - Trending now"
                        className='bg-img'
                    />
                    <video
                        autoPlay={false}
                        onMouseEnter={e =>
                            setTimeout(() => {
                                e.target.currentTime = 1;
                                e.target.play();
                            }, 1000)}
                        onMouseLeave={e => {
                            e.target.currentTime = 0;
                            e.target.pause()
                            e.target.load()
                        }}
                        muted loop id="video-bg">
                        <source src={trendingVid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>
    )
}