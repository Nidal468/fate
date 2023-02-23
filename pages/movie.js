import {useState} from 'react';
import { movie } from '/styles/style';
import {Menu} from './components/basic';
import {meryl, alyss, claudia, zhongli, zilong, seele, fanny, gusion} from '../public/images/image';

export default function Movie() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <main className={movie.body}>
      <div className={movie.home}>
        <span><i className="fi fi-rr-arrow-small-left"></i><h6>Neon Theatre</h6><i className="fi fi-rr-menu-dots-vertical"></i>
					<div className={movie.menu}>
					<i className="fi fi-rr-menu-dots-vertical"></i>
					<span>
						<div>Profile</div>
						<div>Your cart</div>
						<div>Movies</div>
					</span>
					</div>
				</span>
        <div className={movie.new}>
          <img src={seele} /><div className={movie.new_more}><i className="fi fi-rr-apps"></i></div>
        </div>
        <h4>New released</h4>
        <div className={movie.top}>
          <div className={movie.movie}>
						<img src={meryl} />
					</div>
        </div>
        <h4>Most popular</h4>
				<img src={fanny} id={movie.img} />
      </div>
			<Menu one="home" two="search" three="shopping-cart" four="user"/>
    </main>
  );
}
