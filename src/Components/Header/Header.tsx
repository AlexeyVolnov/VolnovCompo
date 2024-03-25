import {FC} from "react";
import logo from '../../icons/Frame 1308.png'
import style from './Header.module.scss'
import {FaListUl, FaRegBell, FaRegHeart} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import {MdClose} from "react-icons/md";
import {IoCartOutline} from "react-icons/io5";
import avatar from '../../icons/Avatar.png'
import {IoIosArrowDown} from "react-icons/io";
import {RiMessage3Line, RiPercentLine} from "react-icons/ri";

const Header: FC = () => {
	return (
			<div className={style.header}>
				<div className={style.headerTop}>
					<div><img src={logo} alt=""/></div>
					<div className={style.menuButton}>
						<FaListUl color={'white'}/>
						<span>Меню</span>
					</div>
					<div className={style.search}>
						<input type="text" placeholder={'Название запроса'}/>
						<div className={style.searchIcons}>
							<MdClose size={22}/>
							<CiSearch size={22} fill={'#131313'}/>
						</div>
					</div>
					<div className={style.options}>
						<FaRegBell fill={'#1551E5'} size={22}/>
						<div className={style.line}></div>
						<FaRegHeart size={22} fill={'#6c6c6c'}/>
					</div>
					<div className={style.cart}>
						<IoCartOutline size={22} fill={'#1551E5'}/>
						<span>144 235P</span>
					</div>
					<div className={style.user}>
						<img src={avatar} alt=""/>
						<span>Ермаков Е.</span>
						<IoIosArrowDown fill={'#1551E5'}/>
					</div>
				</div>
				<div className={style.headerBottom}>
					<ul className={style.categories1}>
						<li>Мои заказы</li>
						<li>Сотрудники</li>
						<li>Шаблоны заказов</li>
						<li>Обращения</li>
					</ul>
					<ul className={style.categories2}>
						<li className={style.manager}><RiMessage3Line fill={'#1551E5'}/><span>Ваш менеджер</span></li>
						<li className={style.actions}><RiPercentLine fill={'#1551E5'}/><span>Акции</span></li>
						<li>Блог</li>
					</ul>

				</div>
			</div>
	)
}

export default Header