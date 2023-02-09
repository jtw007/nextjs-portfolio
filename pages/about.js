// this will be /about route
import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>About me</h1>

            {/* more than 1 style can use string interpolation */}
            <p className={styles.coolColor}>I am a super cool software engineer, pls hire ;-;</p>

            <p>{`don't use apostrophes unless they are in backticks`}</p>

            <h2>I am a different color</h2>
            {/* styled jsx is great for conditional rendering */}
            <style jsx>{`
                h2 {
                    color: purple; 
                }
            `}</style>

            {/* two ways of rendering images: stored locally and a url */} 
            <img 
                src='/next.svg'
                alt='logo of my favorite framework'
            />

            {/* getting image from outside source */}
            <img 
                src="https://placekitten.com/300/600"
                alt="meow"
            />
        </div>
    )
}