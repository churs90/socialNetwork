import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../preloader/Preloader";
import Status from "../status/Status";

const ProfileInfo = (props) => {

    if(!props.profilePage.userProfile){
        return (
            <Preloader/>
        )
    }
    return (
        <div className={styles.profileInfo}>
            <div>
                <div className={styles.avatar}><img src={props.profilePage.userProfile.photos.large ? props.profilePage.userProfile.photos.large : "https://i.ya-webdesign.com/images/user-avatar-png-7.png"} alt=""/></div>
                <Status status={props.profilePage.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={styles.dopInfo}>
                {props.profilePage.userProfile.contacts.facebook && <div><a href={props.profilePage.userProfile.contacts.facebook}><img src="https://icon-icons.com/icons2/642/PNG/96/facebook_icon-icons.com_59205.png" alt=""/></a></div>}
                {props.profilePage.userProfile.contacts.vk && <div><a href={props.profilePage.userProfile.contacts.vk}><img src="https://icon-icons.com/icons2/1121/PNG/96/1486147202-social-media-circled-network10_79475.png" alt=""/></a></div>}
                {props.profilePage.userProfile.contacts.twitter && <div><a href={props.profilePage.userProfile.contacts.twitter}><img src="https://icon-icons.com/icons2/122/PNG/96/twitter_socialnetwork_20007.png" alt=""/></a></div>}
                {props.profilePage.userProfile.contacts.instagram && <div><a href={props.profilePage.userProfile.contacts.instagram}><img src="https://icon-icons.com/icons2/1584/PNG/96/3721672-instagram_108066.png" alt=""/></a></div>}
                {props.profilePage.userProfile.contacts.github && <div><a href={props.profilePage.userProfile.contacts.github}><img src="https://icon-icons.com/icons2/936/PNG/96/github-logo_icon-icons.com_73546.png" alt=""/></a></div>}
                {props.profilePage.userProfile.contacts.youtube && <div><a href={props.profilePage.userProfile.contacts.youtube}><img src="https://icon-icons.com/icons2/31/PNG/96/social_youtube_2756.png" alt=""/></a></div>}
            </div>
        </div>
    )
}

export default ProfileInfo;
