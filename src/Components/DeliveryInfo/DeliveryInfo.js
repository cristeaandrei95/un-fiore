import React from "react";

const DeliveryInfo = () => (
    <section>
        <h2>Adresa de livrare</h2>
        <div>
            <label for='adresa'>Adresa:</label>
            <input name='adresa' value='male' />
            <br />

            <label for='female'>Female</label>
            <input type='radio' name='gender' id='female' value='female' />
            <br />
            <label for='other'>Other</label>
            <input type='radio' name='gender' id='other' value='other' />
            <br />
            <br />
            <input type='submit' value='Submit' />
        </div>
    </section>
);

export default DeliveryInfo;
