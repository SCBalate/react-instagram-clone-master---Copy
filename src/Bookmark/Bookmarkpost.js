import Suggestions from "../timeline/Suggestions";

const bookmarkedPosts=()=>{
    return(
        <div>
            <div className="Bookmark_posts"></div>
            <div className="bookmarkpost__suggestion">
        <Suggestions/>
      </div>
        </div>
    )
}

export default bookmarkedPosts