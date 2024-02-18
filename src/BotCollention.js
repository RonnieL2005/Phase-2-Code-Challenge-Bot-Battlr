import React from "react";


const BotCollection = ({ bots, enlistBot, enlistedBots }) => {
  return (
    <>
      
      <div className="col-11 border border-primary">
        <h2>My Collection</h2>
      </div>

      
      <div className="row">
        {bots.map((bot) => (
          
          <div key={bot.id} className="card col-3 m-1">
            
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />

            
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                {bot.name}
              </h5>
              <p className="card-text" style={{ fontSize: "0.9rem" }}>
                {bot.description}
              </p>
              
              <button
                onClick={() => enlistBot(bot)} //this is to enlist the bot when the bot has been enlisted
                disabled={enlistedBots.some(
                  (enlistedBot) => enlistedBot.id === bot.id
                )} // this is to Disable the button if the bot has already been enlisted
              >
                {enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)
                  ? "Enlisted"
                  : "Add to favorites"}{" "}
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BotCollection;