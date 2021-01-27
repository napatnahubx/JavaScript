class Media{
    constructor(into){
        this.publisnDate=info.publishDate;
        this.name=info.name;
    }
}
class Song extends Media{
    constructor (SongData){
        super(songData);
        this.artist=songData.artist;
    }
}
const MySong=new Song({
artist:"Queen",
name:"Bohemain Rhapsody",
publishDate:1975,
});
console.log(mySong);