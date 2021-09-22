# # 💫🎬 What is "Movie List Module"? 🎬


Movie List Module is a npm package to aggregate metadata feeds from Video On Demand services like Netflix, Amazon Prime, iTunes, etc…  
It lets you get the first website link of the TV Show that you search for and returns you a picture or a photo of the show.✅   
If you are developing application which needs these kind of data, this package is for you 👌  

<i>This product uses the TMDB API but is not endorsed or certified by TMDB</i>


# How to use it?
Use `npm i movie-list-node` to intall the package to your project.  
Create your API key on TMDB website as shown below:
![enter image description here](https://files.tmdb.org/misc/api_step_3-1534865163.png)


## Use it on your code

And you are ready to go! 🤘<br>
Use `movieLister()` function with a parameter of the name of the movie that you want to search for.   

## Returns

    poster_path
    
    string or null
    
    optional
    
    adult
    
    boolean
    
    optional
    
    overview
    
    string
    
    optional
    
    release_date
    
    string
    
    optional
    
    genre_ids
    
    array[integer]
    
    optional
    
    id
    
    integer
    
    optional
    
    original_title
    
    string
    
    optional
    
    original_language
    
    string
    
    optional
    
    title
    
    string
    
    optional
    
    backdrop_path
    
    string or null
    
    optional
    
    popularity
    
    number
    
    optional
    
    vote_count
    
    integer
    
    optional
    
    video
    
    boolean
    
    optional
    
    vote_average
    
    number
    
    optional


