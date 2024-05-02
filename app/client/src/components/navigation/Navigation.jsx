import React from "react";
import { Button } from "../button/Button";
import { title, navigation } from "./content";
import { Outlet, Link } from "react-router-dom";
import styles from './navigation.module.css'

export const Navigation = () => {
	return (
		<nav className={styles.navBar}>
			<span>{title}</span>

			<div className={styles.navButtons}>
				{navigation.map((element, index) => (
					<a key={index} href={element.href} type="button">{element.name}</a>
				))}
				<button>
					Sign Up
				</button>
			</div>
		</nav>
	);
};
