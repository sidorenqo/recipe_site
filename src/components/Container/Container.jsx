import React from 'react';
import styles from './Container.module.scss'
import Card from "../Card/Card";

const Container = () => {
		return (
				<div className={styles.container}>
					<div className={styles.containerHeader}>
						<h2> Найденные рецепты</h2>
						<p>299</p>
					</div>
					
					<div className={styles.test}>
						
						<Card/>
						<Card/>
						<Card/>
						
					</div>
					
					

					</div>

			
		)
}
export default Container;