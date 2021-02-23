import { Card } from ".";

export const ProfileCard = ({ nickname, email, ...props }) => (
  <Card
    className="flex flex-col justify-center text-white text-center"
    style={{
      background: "linear-gradient(80deg, #cf5fe3 0%, #9b59ff 86%)",
    }}
    {...props}
  >
    <h1 className="text-2xl font-semibold">{nickname}</h1>
    <p className="text-xs font-light">{email}</p>
  </Card>
);
