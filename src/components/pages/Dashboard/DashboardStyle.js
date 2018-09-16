import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

export const Banner = styled.div`
  height: 198px;
  background-image: linear-gradient(98deg, #2da2f2, #006494);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerText = styled.span`
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: auto;
`;

export const Page = styled.div`
  background-color: #f8f8fb;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const ProfileColumnWrapper = styled.div`
  width: 370px;
  margin-left: 135px;
`;

export const EditProfileButton = styled(Button)`
  width: 149px;
  height: 50px;
  border-radius: 5px !important;
  border: solid 1px rgba(20, 41, 61, 0.43) !important;
  background-color: white !important;
  color: #268CCE !important;
  margin-top: 30px !important;
`;

export const BalanceAndOrderStatsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BalanceContainer = styled.div`
  width: 770px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  margin-left: 30px;
  padding-top: 30px;
  padding-left: 40px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const MoneyRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const MoneyRowWorking = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MoneyRowPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 200px;
  margin-top: 40px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const MoneyRowPriceDollars = styled.span`
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2da3f2;
`;

export const MoneyRowPriceCents = styled.span`
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: 18px;
  color: rgba(45, 163, 242, 0.5);
`;

export const MoneyDescriptor = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #14293d;
  margin-top: 5px;
`;

export const MoneyDescriptorSubtext = styled.span`
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgba(20, 41, 61, 0.5);
`;

export const MoneyRowSeparator = styled.hr`
  height: 124px;
  opacity: 0.15;
  border: solid 1px #14293d;
  margin-left: 0;
  margin-right: 0;
`;

export const BalanceBar = styled.div`
  height: 90px;
  border-radius: 5px;
  background-color: #daf0ff;
  width: 100%;
  margin-left: -40px;
  width: 768px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
`;

export const BalancePrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #14293d;
`;

export const WithdrawButton = styled(Button)`
  height: 50px;
  width: 185px;
  border-radius: 5px !important;
  border: solid 1px rgba(20, 41, 61, 0.43) !important;
  color: #107ebb !important;
  background-color: #DBF0FE !important;
`;

export const StatsContainer = styled.div`
  width: 770px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 7px 3px 17px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border: solid 1px #eaeaea;
  margin-left: 30px;
  margin-top: 30px;
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 30px;
`;

export const GraphContainer = styled.div`
  height: 200px;
  width: 400px;
`;