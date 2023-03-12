import React from "react";

const PageSubtitle = ({title}) =>{
    return(
        <section className="bg-blue text-white text-center py-8">
        <div className="container">
          <h2 className="text-4xl">{title}</h2>
        </div>
      </section>
    )
}

export default PageSubtitle