import './App.css'
import background from '../img/background.jpg'

function App() {
  return (
    <main>
      <section class="main-block">
        <img class="background" src={background}></img>
        <div class="comand-block">
          <ul class="comand-list">
            <li class="comand-item">
              <code>/amsg</code>
              <p>– чат администрации</p>
            </li>
            
            <li class="comand-item">
              <code>/oa alerts</code>
              <p>– отключить для себя оповещения</p>
            </li>

            <li class="comand-item">
              <code>/oa stats</code>
              <p>– посмотреть статистику вскопанных руд для себя или другого игрока</p>
            </li>

            <li class="comand-item">
              <code>/oa top</code>
              <p>– топ игроков по выкопанным рудам</p>
            </li>

            <li class="comand-item">
              <code>/ir restore ник</code>
              <p>– открывает интуитивно понятное меню бекапов нужного игрока</p>
            </li>

            <li class="comand-item">
              <code>/banlist</code>
              <p>– список последних банов</p>
            </li>

            <li class="comand-item">
              <code>/checkban</code>
              <p>– проверить бан</p>
            </li>

            <li class="comand-item">
              <code>/history</code>
              <p>– история наказаний игрока</p>
            </li>

            <li class="comand-item">
              <code>/warnings</code>
              <p>– список активных предупреждений</p>
            </li>

            <li class="comand-item">
              <code>/invsee</code>
              <p>– инвентарь игрока</p>
            </li>

            <li class="comand-item">
              <code>/whois</code>
              <p>– информация об игрокен</p>
            </li>

            <li class="comand-item">
              <code>/dupeip</code>
              <p>– сканирование игрока</p>
            </li>

            <li class="comand-item">
              <code>/co i</code>
              <p>– простая команда, включает “режим инспектора”</p>
            </li>

            <li class="comand-item">
              <code>/lkick</code>
              <p>– кикнуть игрока с сервера</p>
            </li>

            <li class="comand-item">
              <code>/lmute</code>
              <p>– замутить игрока</p>
            </li>

            <li class="comand-item">
              <code>/lwarn</code>
              <p>– выдать предупреждение игроку</p>
            </li>

            <li class="comand-item">
              <code>/ltempban</code>
              <p>– выдать временный бан игроку</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
