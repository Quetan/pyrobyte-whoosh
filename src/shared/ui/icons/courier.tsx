import { IconProps } from ".";

const Courier: React.FC<IconProps> = ({
	size = 48,
	fill = "currentColor",
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 48 48"
			{...props}
		>
			<path
				fill={fill}
				d="M44.724 33.966c-.397-.541-.794-1.082-1.27-1.545-1.11-1.081-2.538-1.622-4.125-1.776-.555-.078-1.031-.155-1.27-.773-.793-2.163-2.22-3.707-4.283-4.711a1.232 1.232 0 01-.635-.464c-.08-.154-.158-.463-.08-.618.08-.154.398-.309.556-.231.238.077.476.231.714.463.476.386.873.927 1.349 1.313 1.031.695 1.824.309 2.142-.85.317-1.004.317-1.93.08-2.934-.239-1.16-1.27-1.7-2.302-1.082-.476.232-.793.695-1.19 1.004-.238.232-.396.464-.634.618-.556.386-1.11.31-1.508-.232-.237-.308-.317-.617-.476-.926-.317-.618-.555-.618-.952-.078-.079.078-.079.155-.079.232-.08 0-.08-.077-.159-.077v-.31c0-.849-.396-1.312-1.269-1.467-.317-.077-.714-.077-1.031-.077-1.825 0-3.49-.618-4.76-1.854-.476-.386-.873-.85-1.27-1.313-.158-.154-.158-.308 0-.54.16-.232.397-.54.477-.85.158-.85-.635-2.394-1.508-2.703-.634-.232-1.19-.232-1.824-.077-1.666.386-2.618 1.544-3.174 3.012-1.19 3.09-1.507 6.333-1.03 9.655.237 1.93 1.19 3.012 3.014 3.32 1.904.387 3.887.619 5.87.85.873.078 1.428.464 1.746 1.313.634 1.545 1.269 3.167 1.904 4.712.158.309.317.695.555 1.004.634 1.004 1.507 1.236 2.618.85 1.11-.387 1.666-1.236 1.349-2.395-.238-.85-.556-1.622-.873-2.472-.476-1.158-1.032-2.317-1.349-3.552-.714-2.318-1.983-3.476-4.442-3.785-.952-.155-1.825-.155-2.777-.386-.952-.155-1.27-.54-1.19-1.545.08-.695.159-1.313.317-2.008.08-.463.238-.54.714-.309 1.508.927 3.174 1.545 4.919 1.776.872.078 1.745.232 2.538 0 .08.155.08.232.16.387.396.85.792 1.622 1.11 2.471a264.209 264.209 0 012.935 8.419c.159.54.397.618.873.309.317-.154.555-.386.872-.54 2.46-1.391 4.84-1.237 7.14.463.556.463 1.11.927 1.666 1.467.238-.386.08-.85-.158-1.158z"
			></path>
			<path
				fill={fill}
				d="M31.766 37.738h-9.468c-.704 0-1.095-.234-1.252-.937-.156-.624-.391-1.17-.548-1.794-.391-1.17-.47-2.34 0-3.589.078-.156.078-.312.157-.546.235-1.17-.235-1.794-1.487-1.872H11.265c-1.8 0-3.678.078-5.478.156-1.565.078-2.113.702-1.565 2.106.47 1.17.391 2.185 0 3.355-.47 1.482-.782 2.965-1.174 4.447-.156.546.079.78.548.858.47.078.939.078 1.33.078.626 0 .94-.234 1.096-.858.078-.39.078-.78.078-1.17.391-3.043 2.739-5.305 5.869-5.461 2.973-.234 5.556 1.716 6.338 4.68.157.625.235 1.327.313 2.029.078.468.313.702.783.78H32c.313 0 .626-.078.783-.39.547-.936 0-1.794-1.018-1.872zM39.074 35C36.704 35 35 36.72 35 38.963 35 41.206 36.778 43 39 43c2.296 0 4-1.72 4-4.037C43 36.72 41.296 35 39.074 35z"
			></path>
			<path
				fill={fill}
				d="M12.543 34.002c-2.477-.083-4.54 1.916-4.54 4.415-.083 2.581 1.898 4.58 4.457 4.58 2.476.084 4.457-1.832 4.54-4.414 0-2.582-1.899-4.58-4.457-4.58zM23.027 11.935c1.554.317 3.272-.555 3.926-2.061.245-.555.327-1.11.409-1.744.573.158 1.227.317 1.881.475.41.08.655 0 .737-.317.081-.317-.082-.555-.491-.634-.736-.159-1.473-.397-2.209-.555-.163-.08-.409-.238-.49-.397-.819-1.347-2.536-1.982-4.09-1.585-1.555.396-2.7 1.823-2.7 3.409 0 1.665 1.227 3.013 3.027 3.41z"
			></path>
		</svg>
	);
};

export { Courier };
