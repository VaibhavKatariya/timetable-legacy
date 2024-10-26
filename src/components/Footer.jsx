import Link from "next/link";
// import Socials from "@/components/Socials";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
            {/* <Socials /> */}
            <section className="mt-8 sm:mt-0">
                <p className="text-center text-xs text-muted-foreground">
                    <span>&copy; {new Date().getFullYear()}</span>{" "}
                    Made with <span aria-label="heart">❤️</span> by{" "}
                    <Link className="link" href="https://kaily.in" target="_blank" rel="noopener noreferrer">
                        @VaibhavKatariya
                    </Link>
                </p>
            </section>
        </footer>
    );
}
