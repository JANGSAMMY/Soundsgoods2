import ArtistIVideoItem from './ArtistIVideoItem';
import './style.scss';
import { Link } from 'react-router-dom';

const ArtistIVideo = ({ data }) => {
    return (
        <section id="artist-i-video">
            <div>
                <h2>
                    뮤직비디오
                    <Link to="">
                        <img src="../../../../../public/images/streaming/more.png" alt="" />
                    </Link>
                </h2>
            </div>
            <div className="artist-i-video-list">
                {data.album.slice(0, 3).map((item) => (
                    <ArtistIVideoItem key={item.id} item={item} />
                ))}

                {/* <ArtistIVideoItem />
                <ArtistIVideoItem /> */}
            </div>
        </section>
    );
};

export default ArtistIVideo;
