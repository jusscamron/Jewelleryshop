import "../styles/AnnouncementBar.css";

export default function AnnouncementBar() {
  return (
    <div className="announce">
      <div className="container announce__inner">
        <span className="announce__spacer" aria-hidden="true" />
        <p className="announce__text">Festive Special: Celebrate Every Moment with Timeless Gold Jewellery</p>
        {/* <button className="announce__currency" type="button">
          France (EUR €) ▾
        </button> */}
      </div>
    </div>
  );
}
