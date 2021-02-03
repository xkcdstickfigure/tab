import { Card } from ".";

export const ProfileCard = ({ nickname, email, ...props }) => (
  <Card
    className="flex flex-col justify-center text-white text-center"
    style={{
      background:
        "linear-gradient(80deg, rgba(207,95,227,1) 0%, rgba(155,89,255,1) 86%)",
    }}
    {...props}
  >
    <h1 className="text-2xl font-semibold">{nickname}</h1>
    <p className="text-xs font-light">{email}</p>
  </Card>
);
