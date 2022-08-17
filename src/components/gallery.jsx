import { Image } from "./image";
import imageData from '../data/image-data-sample.json'
export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Jordan! where the dessert meet the sea, as low as the Dead Sea, as high as Umm ad Dami
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {imageData
              ? imageData.map((item, i) => (
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image image_url={item.image_url} title={"Vist Jordan"} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
