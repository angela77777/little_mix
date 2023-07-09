import mysqlDB from "../database/mysqlDB.js"

export const getSongs = async (req, res) => {
    try {
        const { type, search } = req.query;

        var queryBuild = 'SELECT s.name title, g.name genre FROM song as s ';
        queryBuild += 'INNER JOIN song_genre as sg ON s.id = sg.song_id INNER JOIN genre as g ON sg.genre_id = g.id ';


        if(search){
            switch (type) {
                case 'genre':
                    queryBuild += 'WHERE g.name LIKE \'%' + search + '%\'';
                    break;
                default:
                    queryBuild += 'WHERE s.name LIKE \'%' + search + '%\'';
                    break;
            }
        }
        console.log(queryBuild)

        let songs = await mysqlDB.query(queryBuild);
        return res.status(200).json({ songs });
    } catch (err){
        return res.status(500).json({ message: err.message });
    }
}