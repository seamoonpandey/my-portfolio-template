import Image from "next/image"


export const HomeBtn = (props) => {

    return (
        <svg
            width={800}
            height={800}
            viewBox="0 0 24 24"
            fill="props.fill"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3"
                stroke="#292D32"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const Github = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
        </svg>
    )
}

export const Twitter = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="twitter"
            className="prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
        </svg>
    )
}

export const Facebook = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="facebook"
            className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
        </svg>
    )
}

export const YouTube = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="youtube"
            className="prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
        </svg>
    )
}

export const YinYang = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="yin-yang"
            className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
            />
        </svg>
    )
}

export const Anchor = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="anchor"
            className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
            />
        </svg>
    )
}



export const Link = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="link"
            className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}

        >
            <path
                fill={props.fill}

                d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
            />
        </svg>
    )
}



export const Design = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="palette"
            className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
            />
        </svg>
    )

}

export const Develope = (props) => {
    return (
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="laptop-code"
            className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            {...props}
        >
            <path
                fill={props.fill}
                d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
            />
        </svg>
    )

}
export const Instagram = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    )
}

export const Linkedin = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
            <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
        </svg>
    )
}

export const Linux = (props) => {
    return (
        (
            <svg
                height={props.height}
                width={props.width}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 495 495"
                xmlSpace="preserve"
                {...props}
            >
                <path
                    style={{
                        fill: "#1d1d1f",
                    }}
                    d="M247.5 0v40H455v415H247.5v40H495V0z"
                />
                <path
                    style={{
                        fill: "#3e3d42",
                    }}
                    d="M40 455V40h207.5V0H0v495h247.5v-40z"
                />
                <path
                    style={{
                        fill: "#1d1d1f",
                    }}
                    d="M144.157 388.053c16.613 1.984 35.279 12.746 50.9 14.646 15.705 1.983 20.565-10.695 20.565-10.695s17.673-3.951 36.253-4.406c18.598-.521 36.203 3.868 36.203 3.868s3.414 7.819 9.787 11.233c6.373 3.48 20.094 3.951 28.888-5.314 8.811-9.332 32.319-21.087 45.519-28.435 13.284-7.365 10.846-18.597 2.506-22.011-8.34-3.413-15.167-8.794-14.646-19.119.454-10.24-7.365-17.067-7.365-17.067s6.844-22.532.471-41.197c-6.373-18.58-27.392-48.461-43.551-70.926-16.159-22.532-2.439-48.545-17.151-81.789-14.714-33.294-52.867-31.326-73.432-17.135-20.565 14.192-14.26 49.386-13.268 66.084.992 16.613.454 28.501-1.446 32.773-1.9 4.338-15.167 20.094-23.978 33.294-8.794 13.267-15.168 40.659-21.608 51.959-6.306 11.233-1.9 21.473-1.9 21.473s-4.405 1.513-7.886 8.879c-3.414 7.281-10.241 10.761-22.533 13.133-12.208 2.505-12.208 10.375-9.265 19.186 2.959 8.794 0 13.721-3.414 24.954-3.413 11.231 13.671 14.644 30.351 16.612zm172.692-51.237c8.727 3.817 21.271-1.497 25.088-5.314 3.801-3.8 6.491-9.45 6.491-9.45s3.817 1.9 3.43 7.936c-.404 6.121 2.623 14.848 8.34 17.875 5.717 3.01 14.444 7.213 9.921 11.417-4.608 4.204-30.099 14.461-37.716 22.465-7.55 7.953-17.471 14.461-23.508 12.544-6.103-1.9-11.434-10.24-8.81-22.448 2.707-12.157 4.994-25.492 4.607-33.109-.403-7.617-1.9-17.874 0-19.388 1.9-1.497 4.927-.774 4.927-.774s-1.515 14.447 7.23 18.246zm-56.633-205.783c8.407 0 15.184 8.34 15.184 18.597 0 7.281-3.414 13.587-8.408 16.614-1.261-.521-2.573-1.11-4.019-1.716 3.027-1.496 5.128-5.313 5.128-9.719 0-5.767-3.547-10.509-8.004-10.509-4.338 0-7.954 4.741-7.954 10.509 0 2.103.522 4.204 1.379 5.852a354.674 354.674 0 0 0-6.894-2.69 22.666 22.666 0 0 1-1.581-8.34c.001-10.257 6.76-18.598 15.169-18.598zm-20.818 32.05c4.137.723 15.503 5.65 19.708 7.163 4.204 1.446 8.861 4.136 8.407 6.827-.521 2.774-2.69 2.774-8.407 6.255-5.65 3.414-17.992 11.031-21.944 11.552-3.935.521-6.171-1.699-10.376-4.406-4.204-2.758-12.089-9.198-10.106-12.611 0 0 6.171-4.725 8.862-7.146 2.691-2.506 9.652-8.408 13.856-7.634zm-18.127-29.09c6.625 0 12.023 7.886 12.023 17.605 0 1.766-.202 3.413-.521 5.061-1.648.521-3.295 1.379-4.877 2.758-.773.656-1.497 1.244-2.152 1.9 1.042-1.967 1.446-4.792.975-7.752-.908-5.246-4.456-9.13-7.937-8.609-3.498.589-5.583 5.398-4.742 10.712.925 5.381 4.405 9.264 7.953 8.676.202-.067.387-.134.589-.202-1.698 1.648-3.279 3.094-4.927 4.271-4.792-2.237-8.34-8.929-8.34-16.815.001-9.786 5.314-17.605 11.956-17.605zm-36.909 127.223c6.827-10.761 11.232-34.286 18.059-42.105 6.895-7.802 12.208-24.432 9.787-31.78 0 0 14.713 17.605 24.954 14.713 10.257-2.96 33.311-20.094 36.724-17.151 3.414 2.959 32.773 67.529 35.732 88.094 2.96 20.548-1.967 36.254-1.967 36.254s-11.232-2.96-12.679 3.867c-1.446 6.894-1.446 31.865-1.446 31.865s-15.184 21.019-38.692 24.499c-23.508 3.414-35.279.925-35.279.925l-13.2-15.117s10.258-1.513 8.811-11.821c-1.446-10.24-31.344-24.433-36.725-37.179-5.379-12.746-.99-34.286 5.921-45.064zm-58.13 77.114c1.177-5.044 16.411-5.044 22.263-8.592 5.852-3.548 7.028-13.738 11.754-16.428 4.657-2.758 13.267 7.029 16.815 12.543 3.481 5.381 16.816 28.906 22.264 34.757 5.515 5.902 10.577 13.721 8.996 20.75-1.496 7.028-9.786 12.157-9.786 12.157-7.415 2.287-28.098-6.642-37.497-10.577-9.399-3.951-33.311-5.129-36.388-8.609-3.161-3.548 1.513-11.367 2.757-18.783 1.109-7.499-2.371-12.157-1.178-17.218z"
                />
            </svg>
        )
    )
}

export const Coding = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} {...props}>
            <path d="m553 1399-50 50q-10 10-23 10t-23-10L-9 983q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23L160 960l393 393q10 10 10 23t-10 23zm591-1067L771 1623q-4 13-15.5 19.5T732 1645l-62-17q-13-4-19.5-15.5T648 1588l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
        </svg>
    )

}

export const Sharingan = (props) => {
    return (
        <img alt='mangekoyou' src="/Images/mangekyou.png" style={{
            height: props.height,
            width: props.width,
            borderRadius: "50%"
        }} />
    )
}

export const Setting = (props) => {
    return (
        <svg
            height={props.height}
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488.189 488.189"
            xmlSpace="preserve"
            {...props}
        >
            <path d="M326.9 67.166c6.7-14.5 13.5-28.9 20.6-44.2-78.6-33.1-155.2-31.5-228.4 12.1-70.8 42.1-109.2 106.1-119.1 188.5 16.8 1.5 32.7 2.9 48.6 4.2 8.7-124.5 146.3-220 278.3-160.6zM484.7 202.466c-15.8 2.7-31.5 5.5-47.9 8.3 8.5 57-3.3 108.4-38.1 153.4-34.6 44.8-81 69.4-137.7 75.7 1.4 16.1 2.8 31.8 4.1 47.5 118.7-4.2 245.9-123.4 219.6-284.9zM47.9 262.066c-15.1 1.3-30.8 2.7-46.5 4 3.7 99.5 90.5 211.5 221.4 222.1 1.4-16.1 2.8-31.9 4.1-47.2-102.4-17.1-161.7-76.4-179-178.9zM398.9 125.566c12.2 15.8 21.6 33.2 28.9 52.4 15.2-5.5 30.2-11 45.9-16.7-18.1-48.2-47.6-86.6-89.5-116.7-9.3 13.3-18.5 26.3-28 39.9 16.2 11.9 30.6 25.4 42.7 41.1z" />
            <path d="M267.2 384.166v-19.1c16.3-3.1 32.1-9.6 46.3-19.4l13.6 13.6c5.1 5 13.2 5 18.3 0l14.1-14.1c5-5.1 5-13.2 0-18.3l-13.8-13.8c9.6-14.2 15.9-30 18.9-46.2h19.6c7.1 0 12.9-5.8 12.9-12.9v-20c0-7.1-5.8-12.9-12.9-12.9h-19.7c-3.1-16.2-9.5-31.8-19.1-45.9l14-14c5-5.1 5-13.2 0-18.3l-14.3-14.2c-5.1-5-13.2-5-18.3 0l-14 14c-14.1-9.6-29.8-16-46-19.1v-19.7c0-7.1-5.8-12.9-12.9-12.9h-20c-7.1 0-12.9 5.8-12.9 12.9v19.6c-16.2 3-32 9.4-46.2 19l-13.7-13.6c-5.1-5-13.2-5-18.3 0l-14.1 14.2c-5 5.1-5 13.2 0 18.3l13.6 13.6c-9.8 14.2-16.2 30-19.3 46.3h-19.1c-7.1 0-12.9 5.8-12.9 12.9v20c0 7.1 5.8 12.9 12.9 12.9h19c3.1 16.4 9.5 32.3 19.2 46.5l-13.2 13.5c-5 5.1-5 13.2 0 18.3l14.1 14.1c5.1 5 13.2 5 18.3 0l13.4-13.4c14.3 9.7 30.2 16.1 46.6 19.2v19c0 7.1 5.8 12.9 12.9 12.9h20c7.2-.1 13-5.9 13-13zm-70.2-92.9c-26-26-26.1-68.2-.1-94.2s68.2-26.1 94.2-.1 26.1 68.2.1 94.2c-25.9 26-68.1 26.1-94.2.1z" />
        </svg>
    )
}