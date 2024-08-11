import React from 'react';
import styles from './CardOpen.module.scss';


function CardOpen(props) {
	return (
			<div onClick={props.onCloseCard} >
				<div className={styles.headerName}>
					<h2>ДЛИННОЕ НАИМЕНОВАНИЕ БЛЮДА</h2>
				</div>
				
				<div className={styles.wrapper}>
					<div className={styles.leftBlock}>
						<div> <h3>Кухня</h3> <hr/> <p>312</p> </div>
						<div> <h3>Теги</h3> <hr/> <p>312</p> </div>
						<div> <h3>Калорийность</h3> <hr/> <p>312</p> </div>
						<div> <h3>Количество порций</h3> <hr/> <p>312</p> </div>
						<div> <h3>Описание</h3> <hr/> <p>312</p> </div>
						
					</div>
				</div>
				
				<div className={styles.middleBlock}>
					<div><h3>Общее время приготовления</h3>
						<hr/>
						<p>312</p></div>
					<div><ul>
						<li>123</li>
						<li>123</li>
						<li>123</li>
						<li>123</li>
						<li>123</li>
						
						</ul></div>
				</div>
				
				<div className={styles.rightBlock}>
					<img src="/img/photo.jpg" alt="123"/>
				</div>
			
			</div>
	
	)
}

export default CardOpen;
