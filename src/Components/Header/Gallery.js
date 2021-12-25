
import AddIcon from '@mui/icons-material/Add';
import { propTypes } from 'react-bootstrap/esm/Image';

function Gallery(props) {
    const images = [
        require('../../Assets/cube.jpeg'), require('../../Assets/balloon.png')
    ]
    return (
        <div style={{margin:10,width:200}}>
            {images.map((item) =>
                <img src={item} style={{ height: 60, width: 60, margin:5 }} />
            )}
        </div>
    );
}

export default Gallery;
