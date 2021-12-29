import { Avatar } from "@material-ui/core"
import "./SidebarChat.css"
export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebar__info">
             <h2>Room name</h2>
             <p>This is last message</p>
            </div>
        </div>
    )
}
