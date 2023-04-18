import styles from "@/styles/user.module.css";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import Link from "next/link";

const mockData = [
  {
    id: 1,
    title: "title1",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "0",
  },
  {
    id: 1,
    title: "title2",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "1",
  },
  {
    id: 1,
    title: "title3",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "2",
  },
  {
    id: 1,
    title: "title4",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "3",
  },
  {
    id: 1,
    title: "title5",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "4",
  },
  {
    id: 1,
    title: "title6",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "4",
  },
  {
    id: 1,
    title: "title7",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "4",
  },
  {
    id: 1,
    title: "title8",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "4",
  },
  {
    id: 1,
    title: "title9",
    description: "description",
    image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    copyright_id: "4",
  },
];

export default function Index() {
  const router = useRouter();
  const { id: userId } = router.query;

  return (
    <>
      <main className={styles.main}>
        <Header />
        <br />
        <Link href={`/user/${userId}/add`}>
          <button className="btn btn-success">　　Add　　</button>
        </Link>
        <br />
        <h2> Your Copyright NFT </h2>
        <div className={styles.customGrid}>
          {mockData.map((item) => (
            <Link
              key={item.id}
              href={`/user/${userId}/copyright_id/${item.copyright_id}`}
            >
              <img className={styles.item} src={item.image} alt={item.title} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
