const Review = () => {
  return (
    <div className="flex flex-col w-full">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-white pb-3 text-2xl lg:text-4xl md:w-96 lg:w-[32rem]"
      >
        About us
      </h1>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="text-dimWhite text-[0.8rem] lg:text-[1rem] md:w-80 lg:w-[30rem] w-full"
      >
        Our app operates on a blockchain-based network that ensures every photo uploaded is encrypted and hashed before being stored on a decentralized database. This ensures that all user data remains private and secure at all times. With our simple and user-friendly interface, you can easily upload and share your photos with anyone in the world in a matter of seconds.
We take privacy and security very seriously on our Decentralized app. All data is encrypted and stored on a decentralized network that removes the need for intermediaries. Our users have complete control over the photos they share, including who can access them and for how long. Our advanced privacy settings let you customize your profile, specific photos, and activities such as liking or commenting.
      </div>
    </div>
  );
};

export default Review;
