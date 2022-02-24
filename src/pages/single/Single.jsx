import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

import './single.css'

function Single(props) {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;