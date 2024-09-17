import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css"

const Detail = () => {
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
        useChatStore();

    const { currentUser } = useUserStore();

    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id)
        try {
            await updateDoc(userDocRef, {
                block: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            })
            changeBlock()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Omnis, deleniti.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy and help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.freepik.com/free-ai-image/close-up-adorable-kitten-near-yarn_65547194.htm#query=cute%20cat&position=8&from_view=keyword&track=ais_hybrid&uuid=b86d6cc5-b7fc-4749-aeb5-c1f17535e251" alt="" />
                                <span>photo_2024_2.png</span>

                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.freepik.com/free-ai-image/close-up-adorable-kitten-near-yarn_65547194.htm#query=cute%20cat&position=8&from_view=keyword&track=ais_hybrid&uuid=b86d6cc5-b7fc-4749-aeb5-c1f17535e251" alt="" />
                                <span>photo_2024_2.png</span>

                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://www.freepik.com/free-ai-image/close-up-adorable-kitten-near-yarn_65547194.htm#query=cute%20cat&position=8&from_view=keyword&track=ais_hybrid&uuid=b86d6cc5-b7fc-4749-aeb5-c1f17535e251" alt="" />
                                <span>photo_2024_2.png</span>

                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

            </div>
            <button onClick={handleBlock}>{
                isCurrentUserBlocked
                    ? "You are blocked!"
                    : isReceiverBlocked
                    ? "User blocked"
                    : "Block User"
            }</button>
            <button className="logout" onClick={() => auth.signOut()}>Logout</button>
        </div>
    )
}
export default Detail;