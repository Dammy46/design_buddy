import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero_section/hero';
import Section from './components/section/section'
import { useState } from 'react';

export default function App() {
      // const [arryjobs, setArryJobs] = useState([
      //   {
      //     id: 1,
      //     file:
      //       'data image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      //     remote: 'Remote',
      //     active: true,
      //   },
      //   {
      //     id: 2,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: true,
      //   },
      //   {
      //     id: 3,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 4,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 5,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 6,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 7,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 8,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 9,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      //   {
      //     id: 10,
      //     file:
      //       'data file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACrq6uYmJiFhYVycnJhYWE/Pz9PT08qKiry8vIxMTHS0tIgICDZ2dng4OAUFBRVVVWMjIzo6Oj5+fkKCgptbW1ISEi2trafn583Nzd+fn4ZGRnLy8slJSVcXFwDaYbtAAADjElEQVR4nO3d53LiQBSE0RkklCNCIILs93/LHcAmY3vD1N2+6s//XOWiTxFUYEDGflHfNPvyLU3TPM+3cRwnrjY6Nj+3C48tgttmv9vd34eXzhe1Ol70u1uxdmtit8pteyv3TfMFwjz75XoxFlXddVmWLc3/3zLLuq6uxqD9mTAeOunJf1w2rL8VtoX0yr+siL4UpqP0wH9QsX0t3CHc675vGb4SzqSn/bOG50INt9DPimdC9IeY26rmQagL6Ij3Qk030VPFrVDPg8yl4Vq4k17jpcVFmOs4Dj4Un4X67oSnqk/hu/QSb60+hNoOFJeqkzCW3uGx5CgcpGd4bDgKM+kZHst6J2ylV3gtcsKF9AivbZxQ68HwVOGElfQIr9VOWEuP8FrnhLivHf6krDe95oOFMcu9aXQLTTkBYSk9wXPpBIRv0hM8l7of3eXqhVtn1F1MIXyx0fwqzaGEQvgSs5ae4LnWGXUXUQhfZPT+W+bUyhl1N6cQvikIV9ITPLdzRt2FFMJHIX6h0fmGr0sLZ9RdQCF8FOJHIX4U4hcY3W9rM2bjjLqbUQgfhfhRiN/MaPzU2nUU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiN4Xvp6EQPQrxoxC/2QS++1L/95dSiB6F+FGIH4X4BRM4R4n+88xQiB6F+IXqz50XTuD8hxSiNwWh/vMB6z+nM4XoRWYtPcFzrYmlJ3guoRC+xOTSEzwXUwhfbFLpCZ7bqhfm5k16gudSU0pP8NwUhM1SeoPfStNk0hv8Vppet3C5N7aTHuG1rDe2lh7htc4aW0mP8FrthKP0CK8VTqj7rXsbJ2ylR3gtckKr+XCRNQfhID3DY6M9CDW/ntgehbaQ3uGt2p6Eev/9NP8Qqr0SD1fhSbiVnuKp9Vlodb65LbAXocojxmivhQrvipW9Fap7ilHbe2Gji1iXD0JdN9TqwroSKnq4Ge1zodXyGajAvhLaWMOdsV7b10JrV+jGen4nuhdamwy4T4mzsX3wPAqt7aNNUXcZ0sv9y6yri03UPNE8E34492WZpmm+jeM4SZI2iqLV3LULDy2CzzYzn23Ol7M4Xm54mLByW1q3yS3b5m5jWe77l45fvrEcYrz5ATUAAAAASUVORK5CYII=',
      //     brand: 'Spotify',
      //     job: 'UI/UX Designer',
      //     time: 'Fulltime',
      
      //     remote: 'Remote',
      //     active: false,
      //   },
      // ]);
  return (

    <div className='overflow-y-auto '>
      <Navbar btnValue={'nothing'} />
      <Hero />
      <Section />
    </div>
  );
}
