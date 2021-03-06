		}

		if ( ! path ) {
			return null;
		}

		const iconClass = [ 'dashicon', 'dashicons-' + icon, className ].filter( Boolean ).join( ' ' );

		return (
			<svg 
				aria-hidden
				role="img"
				className={ iconClass }
				xmlns="http://www.w3.org/2000/svg"
				width={ size }
				height={ size }
				viewBox="0 0 20 20"
			>
				<path d={ path } />
			</svg>
		);
	}
}
