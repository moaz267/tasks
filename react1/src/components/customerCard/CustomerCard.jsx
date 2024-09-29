import React from "react";

export default function CustomerCard({ title, description }) {
    return (
        <div className="customerCard">
            <div className="customerCard_image">
                <img
                    src="https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716245.jpg?t=st=1727292255~exp=1727295855~hmac=588e7090f93792851be99cb4b4518fcd26b82028e7b977f13ed9cb63d2ccf4db&w=1060"
                    alt=""
                />
            </div>
            <div className="customerCard_content">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}
