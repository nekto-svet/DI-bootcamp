const Language = (props) => {
        const {votes, name, setLanguages, key} = props;


        const increaseVotes = () => {
            setLanguages(prevLanguages => {
              return prevLanguages.map((language) => {
                if (language.name === name) {
                  return { ...language, votes: language.votes + 1 };
                }
                return language;
              });
            });
        };
        
        const styling = {
            display: 'flex',
            justifyContent: 'space-around',
            width: '200px',
            fontSize: '20px',
            padding:'20px',
            margin:'20px',
            border:'1px solid black',
            backgroundColor: 'lightblue'
            };
    
        return (
            <div style={styling}>
                <div>{votes}</div>
                <div>{name}</div>
                <div onClick={() => increaseVotes(key)}>Click Here</div>
            </div>
        )
    }

export default Language;
    