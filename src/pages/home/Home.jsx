import { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/charts/chart/Chart';
import Featured from '../../components/charts/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TableCom from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import { userRequest } from '../../requestMethods';
import './Home.scss';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats');
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart
            title="Last 6 Months (Revenue)"
            aspect={2 / 1}
            data={userStats}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableCom />
        </div>
      </div>
    </div>
  );
};

export default Home;
