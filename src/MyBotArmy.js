import React from "react";

const YourBotArmy = ({ enlistedBots, releaseBot, deleteBot, allBots }) => {
  
  const handleEnlist = (bot) => {
    
    const isEnlisted = enlistedBots.some(
      (enlistedBot) => enlistedBot.id === bot.id
    );

    
    if (!isEnlisted) {
      releaseBot(bot.id); 
      releaseBot(bot.id); 
    }
  };


  const handleDelete = async (botId) => {
    try {
      
      await deleteBot(botId);

      
      releaseBot(botId);
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };

  // this is to filter out all the bots
  const enlistedBotIds = new Set(enlistedBots.map((bot) => bot.id));
  const enlistedBotsData = allBots.filter((bot) => enlistedBotIds.has(bot.id));

  return (
    <>
      
      <div className="col-11 border border-primary">
        <h3>Your Bot Army</h3>
      </div>

      
      <div className="row">
        {enlistedBotsData.map((bot) => (
          <div key={bot.id} className="card col-3 m-1">
            
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />

            
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                {bot.name}
              </h5>
              <p className="card-text" style={{ fontSize: "0.9rem" }}>
                {bot.description}
              </p>
              
              <button onClick={() => releaseBot(bot.id)}>Release</button>

              
              <button
                type="button"
                className="btn btn-danger font-small"
                onClick={() => handleDelete(bot.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {enlistedBotsData.length === 0 && (
        <div className="col-11 border border-primary mt-3">
          <h4>Your favorite bots will appear here.</h4>
        </div>
      )}
    </>
  );
};

export default YourBotArmy;