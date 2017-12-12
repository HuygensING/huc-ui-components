import * as React from 'react'

const levisLabel = () =>
	<div
		style={{
      position: 'fixed',
      right: '0',
      bottom: '80px',
      marginRight: '-35px',
      borderRadius: '2px 0px 2px 0px',
			fontFamily: "'Roboto', sans-serif",
			fontWeight: 300,
      backgroundColor: '#268f75',
      color: '#fff',
      padding: '.5em 1em',
      fontSize: '11px',
      transform: 'rotate(90deg)',
		}}
	>
    <a href="http://it.huygens.knaw.nl/index.php/digital-infrastructure/pergamon/" target="_blanc"
			style={{
				color: '#fff',
				textDecoration: 'none',
				}}
		>Powered by
    <img
      style={{
        height: 'auto',
        width: '17px',
        margin: '-5px 0 -5px 5px',
				transform: 'rotate(-90deg)',
      }}
      src="https://design.huygens.knaw.nl/static/logo-pergamon.svg"
      alt="Pergamon"
    /></a>
  </div>

export default levisLabel;
