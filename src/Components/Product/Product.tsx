import {FC, useState} from "react";
import style from './Product.module.scss'
import {Switch} from 'antd';
import {IoCartOutline} from "react-icons/io5";
import {FaRegHeart} from "react-icons/fa";

const Product: FC = () => {
	const [cardCounter, setCardCounter] = useState(0)
	const incrementCard = () => {
		setCardCounter((prevState) => prevState + 1)
	}
	const decrementCard = () => {
		if (cardCounter) {
			setCardCounter((prevState) => prevState - 1)
		}
	}

	return (
			<div className={style.product}>
				<ul className={style.pagination}>
					<li>Каталог</li>
					<li>Обувь</li>
					<li>Кроссовки</li>
					<li>Беговые</li>
				</ul>
				<h4 className={style.productName}>
					Кроссовки мужские Skechers Sunny Dale
				</h4>
				<div className={style.presentProduct}>
					<div className={style.productSlider}>
						со слайдером некогда возиться
					</div>
					<div className={style.productInfo}>
						<div className={style.productLeftRight}>
							<div className={style.productInfo_left}>
								<div className={style.priceNotAction}>166 534.00 цена без скидки</div>
								<div className={style.price}>
									<span className={style.priceText}>122 566 ₽</span>
									<span className={style.price_action}>-15%</span>
								</div>
								<div className={style.optionsLeft}>
									<span className={style.optionsLeft_buyOptions}>12 штук в уп.</span>
									<Switch defaultChecked/>
									<span>Заказ упаковкой</span>
								</div>
								<div className={style.delivery}>
									<div className={style.deliveryBox}>
										<p className={style.deliveryBox_title}>Завтра</p>
										<p className={style.deliveryBox_desc}>Доставка</p>
									</div>
									<div className={style.deliveryBox}>
										<p className={style.deliveryBox_title}>7 шт.</p>
										<p className={style.deliveryBox_desc}>Тарасовка</p>
									</div>
									<div className={style.deliveryBox}>
										<p className={style.deliveryBox_title}>7 шт.</p>
										<p className={style.deliveryBox_desc}>Тарасовка</p>
									</div>
								</div>
								<div className={style.buttonsCart}>
									{cardCounter === 0
											? <button onClick={incrementCard} className={style.buttonCart}>
												<IoCartOutline size={22}/>
												<span>В корзину</span>
											</button>
											: <button className={style.buttonCounter}>
												<div className={style.dec} onClick={decrementCard}>-</div>
												<div>{cardCounter} шт</div>
												<div className={style.inc} onClick={incrementCard}>+</div>
											</button>}
									<div className={style.buttonHearth}>
										< FaRegHeart size={22} fill={'#1551E5'}/>
									</div>
								</div>
							</div>
							<div className={style.productInfo_right}>

							</div>
						</div>
						<div>
							<p className={style.title}>
								Описание товара
							</p>
							<p className={style.description}>
								Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR
								существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет
								возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что
								коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
								экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано.
								Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
							</p>
						</div>
					</div>

				</div>
			</div>
	)
}

export default Product