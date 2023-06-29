import React from 'react'
import '../css/Pricing.css'

const Pricing = () => {
  return (
    <div className="plan-container">
      <div className="plan-item plan-item-left">
        <h2>Fluss</h2>
        <div className="plan-features">
          <h3>Funktionen:</h3>
          <ul>
            <li>3 Lieferungen Pro Monat</li>
            <li>Einen Supportcall jeden Monat</li>
            <li>Eigener Wasserwunsch angeben</li>
            <li> + Alle vorherigen Features</li>

          </ul>
        </div>
        <div className="plan-premium-water">
          <h3>Premium Wasserabonnement:</h3>
          <ul>
            <li>Monatliche Lieferung von Premiumwasser</li>
          </ul>
        </div>
        <p className="plan-price">1999 Franken pro Monat</p>
        <button className="select-button">Fluss Plan auswählen</button>
      </div>

      <div className="plan-item plan-item-center">
        <h2>Bach</h2>
        <div className="plan-features">
          <h3>Funktionen:</h3>
          <ul>
            <li>1 Lieferung Premiumwasser Pro Monat</li>
            <li>Eintrag in der Datenbank als Kunde</li>
          </ul>
        </div>
        <div className="plan-premium-water">
          <h3>Premium Wasserabonnement:</h3>
          <ul>
            <li>Monatliche Lieferung von Premiumwasser</li>
          </ul>
        </div>
        <p className="plan-price">999 Franken pro Monat</p>
        <button className="select-button">Bach Plan auswählen</button>
      </div>

      <div className="plan-item plan-item-right">
        <h2>Meer</h2>
        <div className="plan-features">
          <h3>Funktionen:</h3>
          <ul>
            <li>100 Lieferungen Pro Monat</li>
            <li>24/7 Kundenservice</li>
            <li>Erwähnung auf unserere WebSite</li>
            <li>Aktienanteil an der Firma</li>
            <li> + Alle vorherigen Features</li>

          </ul>
        </div>
        <div className="plan-premium-water">
          <h3>Premium Wasserabonnement:</h3>
          <ul>
            <li>Monatliche Lieferung von Premiumwasser</li>
          </ul>
        </div>
        <p className="plan-price">12999 Franken pro Monat</p>
        <button className="select-button">Meer Plan auswählen</button>
      </div>
    </div>
  )
}

export default Pricing
