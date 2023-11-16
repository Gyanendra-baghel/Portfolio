import { GithubIcon, LinkedInIcon, YoutubeIcon } from "./icons";

export default function SocialLinks() {
    return (
        <div className="mt-2 p-2 flex w-50">
            <a href="" className="mx-2"><LinkedInIcon width={30} /></a>
            <a href="" className="mx-2"><YoutubeIcon /></a>
            <a href="" className="mx-2"><GithubIcon width={30} /></a>
        </div>
    )
}