interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return <main className=" w-[80%] m-auto h-full">{children}</main>;
}
