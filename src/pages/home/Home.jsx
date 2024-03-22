import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <div className=" p-2 bg-neutral-700  ">
        <div className="flex w-full py-2 justify-between">
          <h1 className="text-2xl font-bold ">Spotify Playlists</h1>

          <NavLink>Show all</NavLink>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: -0 }}
          transition={{ duration: 1 }}
        >
          <div className="img flex justify-between  gap-2">
            <div className="d">
              <div className="p-5 w-48 rounded-xl bg-stone-900">
                <img
                  className="rounded-md"
                  src="https://picsum.photos/150/150"
                  alt=""
                />
                <h3 className="text-white font-bold pt-3">lofi beats</h3>
                <p className="text-sm py-1">
                  chill beats,lofi vibes,
                  <br />
                  new tracks every...
                </p>
              </div>
              <div className="d2"></div>
            </div>
            <div className="d">
              <div className="p-5 w-48 rounded-xl bg-stone-900">
                <img
                  className="rounded-md"
                  src="https://picsum.photos/150/150"
                  alt=""
                />
                <h3 className="text-white font-bold pt-3">lofi beats</h3>
                <p className="text-sm py-1">
                  chill beats,lofi vibes,
                  <br />
                  new traks every...
                </p>
              </div>
              <div className="d2"></div>
            </div>
            <div className="d">
              <div className="p-5 w-48 rounded-xl bg-stone-900">
                <img
                  className="rounded-md"
                  src="https://picsum.photos/150/150"
                  alt=""
                />
                <h3 className="text-white font-bold pt-3">lofi beats</h3>
                <p className="text-sm py-1">
                  chill beats,lofi vibes,
                  <br />
                  new traks every...
                </p>
              </div>
              <div className="d2"></div>
            </div>
            <div className="d">
              <div className="p-5 w-48 rounded-xl bg-stone-900">
                <img
                  className="rounded-md"
                  src="https://picsum.photos/150/150"
                  alt=""
                />
                <h3 className="text-white font-bold pt-3">lofi beats</h3>
                <p className="text-sm py-1">
                  chill beats,lofi vibes,
                  <br />
                  new traks every...
                </p>
              </div>
              <div className="d2"></div>
            </div>
            <div className="d">
              <div className="p-5 w-48 rounded-xl bg-stone-900">
                <img
                  className="rounded-md"
                  src="https://picsum.photos/150/150"
                  alt=""
                />
                <h3 className="text-white font-bold pt-3">lofi beats</h3>
                <p className="text-sm py-1">
                  chill beats,lofi vibes,
                  <br />
                  new tracks every...
                </p>
              </div>
              <div className="d2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
